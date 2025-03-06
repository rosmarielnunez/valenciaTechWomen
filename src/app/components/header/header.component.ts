import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  translate: TranslateService = inject(TranslateService);

  public locales = [
    { value: 'en', name: 'English' },
    { value: 'es', name: 'Spanish' },
  ];
  public selectedLocale = 'en';

  constructor() { }

  changeLanguage($event: Event){
    this.translate.use(this.selectedLocale);
  }

}
