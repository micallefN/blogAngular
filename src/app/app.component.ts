import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  posts = [
    {
      title: 'title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet fermentum sem, vel feugiat nisi efficitur ac. ' +
        'Phasellus ac convallis diam. Donec dapibus a mi vitae lacinia. Maecenas vel orci ornare, ornare eros a, rhoncus velit.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'title 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet fermentum sem, vel feugiat nisi efficitur ac. ' +
        'Phasellus ac convallis diam. Donec dapibus a mi vitae lacinia. Maecenas vel orci ornare, ornare eros a, rhoncus velit.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'title 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet fermentum sem, vel feugiat nisi efficitur ac. ' +
        'Phasellus ac convallis diam. Donec dapibus a mi vitae lacinia. Maecenas vel orci ornare, ornare eros a, rhoncus velit.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
