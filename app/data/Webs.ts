export type BlogPost = {
    id: string;
    title: string;
    author: string;
    date: string;
    content: string;
    imageUrl: string;
    views: number;
  };
  
  export const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Low-Cost Homepage ab 290 CHF",
      author: "Roberto Salvador",
      date: "2024-10-17",
      content: `
        <p>Erstellen Sie Ihre eigene Website ohne Programmierkenntnisse ab nur 290 Franken. 
        Mit unserem benutzerfreundlichen Admin-Panel können Sie Bilder, Texte, Farben und das gesamte Design Ihrer Website ganz einfach anpassen.</p>
        <br>  </br>
        <p><strong>Vorteile:</strong></p>
        <ul>
          <li>Domain und Server inklusive.</li>
          <li>2 personalisierte E-Mail-Konten.</li>
          <li>Volle Kontrolle über Design und Inhalte.</li>
          <li>Einfache Bedienung, ohne technische Kenntnisse.</li>
        </ul>
        <br>  </br>
        <p>Möchten Sie testen, wie es funktioniert?</p>
        <p><a href="https://lweb.ch/web.html" target="_blank" class="text-indigo-500 underline">Mehr Infos</a></p>
      `,
      imageUrl: "https://lweb.ch/images/Captgura%20dXe%20pantalla%202024-09-03%20a%20las%2023.00.26.png",
      views: 10,
    },
    
  ];
  