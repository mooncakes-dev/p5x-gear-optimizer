import { effect, Injectable, signal } from '@angular/core';
import { Theme } from '@app/shared/models/theme-type';

@Injectable({
    providedIn: 'root',
})
export class ThemeProvider {
    private readonly STORAGE_KEY = 'theme';

    theme = signal<Theme>(this.getStoredTheme() || 'system');

    isDarkMode = signal<boolean>(false);

    constructor() {
        effect(() => {
            const theme = this.theme();
            this.applyTheme(theme);
        });

        this.watchSystemTheme();
    }

    public setTheme(theme: Theme): void {
        this.theme.set(theme);
        localStorage.setItem(this.STORAGE_KEY, theme);
    }

    private getStoredTheme(): Theme {
        if (typeof window === 'undefined') return 'system';

        const storedTheme = localStorage.getItem(this.STORAGE_KEY) as Theme | null;

        return storedTheme || 'system';
    }

    private applyTheme(theme: Theme): void {
        if (typeof window === 'undefined') return;

        const root = document.documentElement;

        root.classList.remove('light', 'dark');

        if (theme === 'system') {
            const systemTheme = this.getSystemTheme();

            root.classList.add(systemTheme);
            this.isDarkMode.set(systemTheme === 'dark');
        } else {
            root.classList.add(theme);
            this.isDarkMode.set(theme === 'dark');
        }
    }

    private getSystemTheme(): 'light' | 'dark' {
        if (typeof window === 'undefined') return 'light';

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    private watchSystemTheme(): void {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        mediaQuery.addEventListener('change', () => {
            if (this.theme() === 'system') {
                this.applyTheme('system');
            }
        });
    }
}
