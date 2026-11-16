import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { BaseCard } from '../../shared/base-card/base-card';
import { Button } from '../../shared/button/button';
import { Input } from '../../shared/input/input';
import { Toggle } from '../../shared/toggle/toggle';

@Component({
  selector: 'app-settings',
  imports: [
    Header,
    BaseCard,
    Button,
    Input,
    Toggle
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {

}
