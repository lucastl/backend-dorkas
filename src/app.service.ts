import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPages(): any[] {
    const home = {
      slug: 'home',
      sections: [
        {
          type: 'hero',
          content: {
            background: {
              image: null,
              color: '#0000',
            },
            isotype: null,
            title: '',
            texts: {
              primary: 'Bienvenido al sitio web',
              secondary: 'Porque el tiempo pasado ahora parece tan fugaz.',
            },
          },
        },
        {
          type: 'gallery',
          content: {
            title: 'Gallery',
            items: [
              {
                description: 'Isotype',
                path: '/images/gallery/isotype.jpg',
                link: 'www.google.com',
              },
              {
                description: 'Isotype',
                path: '/images/gallery/isotype.jpg',
                link: 'www.google.com',
              },
              {
                description: 'Isotype',
                path: '/images/gallery/isotype.jpg',
                link: 'www.google.com',
              },
              {
                description: 'Isotype',
                path: '/images/gallery/isotype.jpg',
                link: 'www.google.com',
              },
            ],
          },
        },
        {
          type: 'paragraph',
          content: {
            title: 'Paragraph',
            items: [
              {
                title: 'Aña membu puti pelay',
                paragraphs: [
                  'Lorem ipsum est atilum calpatra seiscrep terricola tuca rreka ya.',
                  'Lorem ipsum est atilum calpatra seiscrep terricola tuca rreka ya.',
                  'Lorem ipsum est atilum calpatra seiscrep terricola tuca rreka ya.',
                ],
              },
              {
                title: 'Ahora nosotros tomamos el control',
                paragraphs: [
                  'Ya nada podran decir de todo lo que alguna vez pasó.',
                  'Eso ya sería otra cosa inperdonable, y no están para esos lujos.',
                  'Yo le dije a papá Noel, tirá los renos a la mierda y comprate una moto.',
                ],
              },
            ],
          },
        },
        {
          type: 'carrousel',
          content: {
            title: 'Carrousel',
            items: [
              {
                texts: {
                  primary: 'Slide #1',
                  secondary: 'Porque el tiempo pasado ahora parece tan fugaz',
                },
                background: {
                  image: null,
                  color: '#769475',
                },
                link: 'www.google.com',
              },
              {
                texts: {
                  primary: 'Slide #2',
                  secondary:
                    'Porque el tiempo presente ahora parece tan demente.',
                },
                background: {
                  image: '/images/carrousel/carrousel.jpg',
                  color: null,
                },
                link: 'www.google.com',
              },
            ],
          },
        },
      ],
      styles: {
        text_color: '#fff',
        background_color: '#000',
        font_size: '16px',
      },
    };
    return [home];
  }
}
