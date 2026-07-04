import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Dashboard } from '../../features/dashboard/dashboard';
import { Sidebar } from '../sidebar/sidebar'
import { RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-layout',
  imports: [Header, Sidebar, Dashboard, Footer, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
