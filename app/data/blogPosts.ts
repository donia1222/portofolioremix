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
    title: "Reservierungssystem",
    author: "Roberto Salvador",
    date: "2024-10-17",
    content: `
      <p>Reservierungssystem: HTML, CSS , JavaScript, PHP, MySQL. 
      Ziel: Das Reservierungssystem ist darauf ausgelegt, Termine und Veranstaltungen effizient für verschiedene Geschäftsarten wie Restaurants, Schönheitssalons und Kliniken zu verwalten. Es bietet eine umfassende Lösung, die die Verwaltung von Reservierungen optimiert und das Benutzererlebnis verbessert.</p>
      <br>  </br>
      <p><strong>Verwendete Technologien:</strong></p>
      <ul>
        <li>HTML, CSS und JavaScript: Für die Erstellung einer intuitiven und ansprechenden Benutzeroberfläche.</li>
        <li>PHP: Für die Verwaltung der Serverlogik und die Integration mit der Datenbank.</li>
        <li>MySQL: Für die Speicherung und Verwaltung von Reservierungsdaten und blockierten Daten.</li>
      </ul>
      <br>  </br>
    
    `,
    imageUrl: "reservas.png",
    views: 10,
  },
  {
    id: "2",
    title: "Animierte und dynamische Webseiten im Jahr 2025",
    author: "Roberto Salvador",
    date: "2025-01-01",
    content: `
      <p>Im digitalen Zeitalter von 2025, in dem Technologie und Nutzererwartungen sich rasant weiterentwickeln, sind dynamische und animierte Webseiten zu einem wesentlichen Bestandteil für den Online-Erfolg geworden. Hier erkläre ich dir, warum du diesen Ansatz für deine Webseite in Betracht ziehen solltest.</p>
      <br>  </br>
      <p><strong>1. Verbesserung der Benutzererfahrung</strong></p>
      <p>Dynamische und animierte Webseiten bieten eine reichhaltigere und interaktivere Benutzererfahrung. Durch die Integration von animierten Elementen fesseln solche Webseiten nicht nur die Aufmerksamkeit des Benutzers, sondern erleichtern auch die Navigation und machen die Interaktion intuitiver und angenehmer.</p>
      <br>  </br>
      <p><strong>2. Steigerung des Engagements</strong></p>
      <p>Eine Webseite mit ansprechenden Animationen und dynamischem Inhalt kann das Engagement der Benutzer deutlich erhöhen. Animationen können dazu beitragen, dass Schlüsselelemente auffälliger sind, was hilft, wichtige Botschaften schnell und effektiv zu vermitteln.</p>
      <br>  </br>
      <p><strong>3. Spiegelbild der Modernität und Innovation</strong></p>
      <p>Im Jahr 2025 ist die Präsenz einer dynamischen und animierten Webseite oft ein Zeichen für Modernität und Innovation eines Unternehmens. Unternehmen, die diese Technologien einsetzen, zeigen, dass sie mit aktuellen Trends auf dem Laufenden sind und sich für kontinuierliche Verbesserungen einsetzen.</p>
      <br>  </br>
      <p><strong>4. Optimierung für mobile Geräte</strong></p>
      <p>Mit der zunehmenden Nutzung mobiler Geräte für den Internetzugang bieten dynamische und animierte Webseiten eine überlegene Anpassungsfähigkeit. Diese Seiten können so gestaltet werden, dass sie vollständig responsiv sind, was sicherstellt, dass der Inhalt auf jeder Bildschirmgröße ansprechend ist.</p>
      <br>  </br>
      <p><strong>5. Verbesserung der SEO-Ergebnisse</strong></p>
      <p>Suchmaschinen wie Google haben begonnen, der Benutzererfahrung in ihren Ranking-Algorithmen mehr Gewicht zu geben. Eine dynamische und animierte Webseite, die schnell lädt und die Benutzer fesselt, kann zu einer besseren Platzierung in den Suchergebnissen führen.</p>
      <br>  </br>
      <p><strong>Fazit</strong></p>
      <p>Animierte und dynamische Webseiten sind im Jahr 2025 nicht nur eine Frage der Ästhetik; sie sind ein entscheidendes strategisches Werkzeug, um die Benutzerinteraktion zu verbessern, Innovation zu reflektieren und die Platzierung in Suchmaschinen zu optimieren.</p>`,
    imageUrl: "/3074147.jpg",
    views: 30,
  },
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
