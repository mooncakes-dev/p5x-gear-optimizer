import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { AppSidebar } from './shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [AppSidebar, HlmSidebarImports, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('p5x-gear-optimizer');
}
