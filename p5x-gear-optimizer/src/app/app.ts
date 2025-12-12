import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { AppSidebar } from './shared/components/sidebar/sidebar.component';
import { ModeToggle } from './shared/components/mode-toggle/mode-toggle';
import { C } from 'node_modules/@angular/cdk/focus-monitor.d-CvvJeQRc';

@Component({
  selector: 'app-root',
  imports: [AppSidebar, HlmSidebarImports, RouterOutlet, ModeToggle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('p5x-gear-optimizer');
}
