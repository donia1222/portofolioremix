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
      id: "3",
      title: "Online Shop ab 1450 CHF",
      author: "Roberto Salvador",
      date: "2025-02-01",
      content: `
        <p>Wussten Sie, dass Sie schon ab 1450 CHF einen eigenen Online-Shop haben können?</p>
        <br>  </br>
        <p>In der heutigen digitalen Welt ist ein Online-Shop wichtiger denn je. Mit Preisen ab nur 1450 CHF können Sie Ihren eigenen Online-Shop starten und von den vielen Vorteilen des E-Commerce profitieren.</p>
        <br>  </br>
        <p><strong>Vorteile eines Online-Shops:</strong></p>
        <ul>
          <li><strong>Rund um die Uhr verfügbar:</strong> Ein Online-Shop ist 24/7 geöffnet. Ihre Kunden können jederzeit und überall einkaufen, was Ihre Verkaufschancen maximiert und Ihnen ermöglicht, ein globales Publikum zu erreichen.</li>
          <br>  </br>
          <li><strong>Kostenersparnis:</strong> Durch den Betrieb im Internet entfallen viele der Kosten, die mit einem physischen Laden verbunden sind, wie z.B. Miete und Betriebskosten.</li>
          <br>  </br>
          <li><strong>Globaler Marktzugang:</strong> Mit einem Online-Shop sind Sie nicht auf eine geografische Lage beschränkt. Sie können Kunden auf der ganzen Welt erreichen.</li>
          <br>  </br>
          <li><strong>Einfache Verwaltung:</strong> Moderne E-Commerce-Plattformen erleichtern die Verwaltung von Lagerbeständen, Zahlungsabwicklungen und Bestellverfolgung.</li>
          <br>  </br>
          <li><strong>Effektives digitales Marketing:</strong> Ein Online-Shop ermöglicht es Ihnen, digitale Marketingstrategien wie SEO, E-Mail-Kampagnen und Werbung in sozialen Medien zu implementieren.</li>
          <br>  </br>
        </ul>
        <p>Verpassen Sie nicht die Chance, Ihr Geschäft auf die nächste Stufe zu heben. Mit einer Anfangsinvestition von nur 1450 CHF können Sie einen vollständig funktionalen Online-Shop haben.</p>
        <br>  </br>
        <p><a href="https://shop.lweb.ch" target="_blank" class="text-indigo-500 underline">Demo Shop</a></p>
      `,
      imageUrl: "/shop.jpg",
      views: 269,
    }
  ];
  