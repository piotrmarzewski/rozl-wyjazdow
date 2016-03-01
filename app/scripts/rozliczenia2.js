// playground for printing cards

var dd = {
      pageSize: 'A5' ,
        pageOrientation: 'landscape',
        pageMargins: [ 20, 20, 20, 20 ],

  content: [
     {
            style: 'tableExample',
            table: {
                widths: ['auto', 100, 'auto', 80],
                headerRows: 1,
                body: [
                    [{ text: 'Karta drogowa nr:', style: 'tableHeader' }, { text: '35/2016', style: 'tableHeader'}, { text: 'Data: ', style: 'tableHeader' },{ text: '10.01.2016', style: 'tableHeader' }],

                ]
            },

        },


     {
          style: 'tableExample',

          table: {
              widths: [10, 100, 100, 80,50,50,'*'],
            body: [
              ['Lp.', 'Nazwisko', 'Trasa:\nSkąd\ndokąd', 'data:\n wyjazdu\nprzyjazdu','godz:\nwyjazdu\nprzyjazdu','licznik:\nwyjazd\nprzyjazd','podpis'],
              [{ rowSpan: 2, text: '1'}, 'Jan', 'Barczewo','10.01.2016','11:25','1231456',{ rowSpan: 2, text: ''}],
              ['', 'Kowalski', 'Olsztyn','10.01.2016','11:00','1231456',''],
              [{ rowSpan: 2, text: '2'}, 'Jan', 'Barczewo','10.01.2016','11:25','1231456',{ rowSpan: 2, text: ''}],
              ['', 'Kowalski', 'Olsztyn','10.01.2016','11:00','1231456',''],
              [{ rowSpan: 2, text: '3'}, 'Jan', 'Barczewo','10.01.2016','11:25','1231456',{ rowSpan: 2, text: ''}],
              ['', 'Kowalski', 'Olsztyn','10.01.2016','11:00','1231456',''],
              [{ rowSpan: 2, text: '4'}, 'Jan', 'Barczewo','10.01.2016','11:25','1231456',{ rowSpan: 2, text: ''}],
              ['', 'Kowalski', 'Olsztyn','10.01.2016','11:00','1231456',''],
              [{ rowSpan: 2, text: '5'}, 'Jan', 'Barczewo','10.01.2016','11:25','1231456',{ rowSpan: 2, text: ''}],
              ['', 'Kowalski', 'Olsztyn','10.01.2016','11:00','1231456',''],
              [{ rowSpan: 2, text: '6'}, 'Jan', 'Barczewo','10.01.2016','11:25','1231456',{ rowSpan: 2, text: ''}],
              ['', 'Kowalski', 'Olsztyn','10.01.2016','11:00','1231456',''],
              [{ rowSpan: 2, text: '7'}, 'Jan', 'Barczewo','10.01.2016','11:25','1231456',{ rowSpan: 2, text: ''}],
              ['', 'Kowalski', 'Olsztyn','10.01.2016','11:00','1231456','']
            ]
          },
          layout: {
                            hLineWidth: function(i, node) {
                                return (i === 0 || i === 1 || i === 3 || i === 6 ) ? 1 : 1;
                            },
                            vLineWidth: function(i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                            },
                            hLineColor: function(i, node) {
                                return (i > 0 &&  !(i % 2)) ? 'gray' : 'black';
                            },
                            vLineColor: function(i, node) {
                                return (i === 0 || i % 2) ? 'gray' : 'black';
                            },
                            paddingLeft: function(i, node) { return 4; },
                            // paddingRight: function(i, node) { return 4; },
                            paddingTop: function(i, node) { return 4; },
                              paddingBottom: function(i, node) { return 4; }
            }
        },
// druga strona
    {
            style: 'tableExample',
            table: {
                widths: [150, 150 ,'*'],

                body: [
                    [{ text: 'Karta drogowa nr:', style: 'tableHeader' },  { text: 'Data: ', style: 'tableHeader' },{ rowSpan: 2, text:'Zakład Budynków Komunalnych\nul. Wojska Polskiego 15\n11-010 Barczewo\ntel. 89 514 99 12\n',style: 'tableHeader'}],
                    [{ text: '35/2016', style: 'tableHeader' },{ text: '10.01.2016', style:  'tableHeader' },'234']
                ]
            },

        },
// samochód
        {
          style: 'tableExample',
          table: {
            widths: [70, 100, 120, 60, '*'],

            body: [
                [{ rowSpan: 2, text: 'Samochód:', style: 'tableHeader' }, { text: 'Nr rejestracyjny: ', style: 'tableFieldName' }, { text: 'Nazwa i marka: ', style: 'tableFieldName' }, { text: 'Typ paliwa: ', style: 'tableFieldName' },{ text: 'Norma: ', style: 'tableFieldName' }],
                ['', 'NOL89238', 'Renault', 'benzyna', '10']
            ]
          }

        },
// kierowca
        {
            style: 'tableExample',
            table: {
                widths: [70, 100 ,120,100,'*'],

                body: [
                    [{ rowSpan: 2, text: 'Kierowca:', style: 'tableHeader' },  { text: 'Imię i nazwisko: ', style: 'tableFieldName' }, { text: 'Promień wyjazdu: ', style: 'tableFieldName' }, { rowSpan: 2, text: 'Pojazd sprawny do wyjazdu: ', style: 'tableFieldName' },{ rowSpan: 2, text: 'Podpis:', style: 'tableFieldName' }],
                    ['','Jan Kowalski','','','']
                ]
            },

        },
// paliwo
        {
            style: 'tableExample',
            table: {
                widths: [70, 55 ,15,80,80,30,'*'],

                body: [
                    [{ rowSpan: 5, text: 'Paliwo:', style: 'tableHeader' },  { rowSpan: 2, text: 'Stan początkowy: ', style: 'tableFieldName' }, { colSpan: 5, text: 'Pobrano', style: 'tableFieldName' }, '',{ text: '', style: 'tableFieldName' },'',''],
                    ['','','l.p.','Miejsce:','Nr kwitu','Ilość','Podpis wydającego'],
                    ['','24','1','','','',''],
                    ['',{ rowSpan: 2, text: 'Podpis', style: 'tableFieldName' },'2','','','',''],
                    ['','','3','','','','']
                ]
            },

        },
// wyniki
        {
            style: 'tableExample',
            table: {
                widths: [70, 80 ,100,120,'*'],

                body: [
                    [{ rowSpan: 2, text: 'Wyniki:', style: 'tableHeader' },  { text: 'Czas pracy: (min)', style: 'tableFieldName' }, { text: 'Przebieg (km): ', style: 'tableFieldName' }, { rowSpan: 2, text: 'Wyniki obliczył: ', style: 'tableFieldName' },{ rowSpan: 2, text: 'Podpis kontrolującego:', style: 'tableFieldName' }],
                    ['','120','340','','']
                ]
            },

        },

  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      margin: [0, 0, 0, 10]
    },
    subheader: {
      fontSize: 16,
      bold: true,
      margin: [0, 10, 0, 5]
    },
    tableExample: {
      fontSize: 10,
      margin: [0, 0, 0, 5]
    },
    tableHeader: {
      bold: true,
      fontSize: 13,
      color: 'black'
    },
    tableText: {
      fontSize: 11,
      color: 'black'
    },
    tableFieldName: {
      fontSize: 10,
      bold: true,
      color: 'black'
    }
  },
  defaultStyle: {
    // alignment: 'justify'
  }
}
