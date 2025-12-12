import { Component, inject } from '@angular/core';
import { ThemeProvider } from '@app/core/theme-provider';
import { Theme } from '@app/shared/models/theme-type';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmIcon } from '@spartan-ng/helm/icon';
@Component({
    selector: 'app-mode-toggle',
    imports: [HlmDropdownMenuImports, HlmIcon, NgIcon],
    providers: [provideIcons({ lucideMoon, lucideSun })],
    templateUrl: './mode-toggle.html',
    styleUrl: './mode-toggle.css',
})
export class ModeToggle {
    themeProvider = inject(ThemeProvider);
    public setTheme(theme: Theme): void {
        this.themeProvider.setTheme(theme);
    }
}
