<?php

namespace App\Filament\Resources\Users\Schemas;

use App\Filament\Forms\Components\RichEditor\Plugins\DisableUnderline;
use App\Filament\Forms\Components\RichEditor\Plugins\UniqueId;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email()
                    ->required(),
                RichEditor::make('bio')
                    ->toolbarButtons([
                        ['bold', 'italic', 'link'],
                        ['h2', 'h3'],
                        ['blockquote', 'bulletList', 'orderedList'],
                        ['attachFiles', 'clearFormatting'],
                        ['undo', 'redo'],
                    ])
                    ->plugins([
                        DisableUnderline::make(),
                        UniqueId::make(),
                    ])
                    ->json()
                    ->columnSpanFull(),
                DateTimePicker::make('email_verified_at'),
                TextInput::make('password')
                    ->password()
                    ->nullable()
                    ->confirmed()
                    ->minLength(8)
                    ->required(fn (string $context): bool => $context === 'create')
                    ->dehydrated(fn ($state): bool => filled($state)),
                TextInput::make('password_confirmation')
                    ->password()
                    ->label('Confirm password')
                    ->requiredWith('password')
                    ->dehydrated(false),
            ]);
    }
}
