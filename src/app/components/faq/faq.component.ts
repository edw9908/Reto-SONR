import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq = [
    {
      name: 'Pregunta 1',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra feugiat justo non consequat. Nam ultricies fringilla ante in dictum. Maecenas tincidunt dui nunc, a egestas elit vulputate nec'
    },
    {
      name: 'Pregunta 2',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra feugiat justo non consequat. Nam ultricies fringilla ante in dictum. Maecenas tincidunt dui nunc, a egestas elit vulputate nec'
    },
    {
      name: 'Pregunta 3',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra feugiat justo non consequat. Nam ultricies fringilla ante in dictum. Maecenas tincidunt dui nunc, a egestas elit vulputate nec'
    },
    {
      name: 'Pregunta 4',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra feugiat justo non consequat. Nam ultricies fringilla ante in dictum. Maecenas tincidunt dui nunc, a egestas elit vulputate nec'
    },
    {
      name: 'Pregunta 5',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra feugiat justo non consequat. Nam ultricies fringilla ante in dictum. Maecenas tincidunt dui nunc, a egestas elit vulputate nec'
    },
    {
      name: 'Pregunta 6',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra feugiat justo non consequat. Nam ultricies fringilla ante in dictum. Maecenas tincidunt dui nunc, a egestas elit vulputate nec'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
