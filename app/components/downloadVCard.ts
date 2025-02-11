// downloadVCard.ts

const handleDownloadVCard = () => {
    console.log("Iniciando descarga de la tarjeta de visita...");

    // URL de la imagen local
    const imageUrl = "https://www.lweb.ch/programming-background-with-person-working-with-codes-computer.jpg";

    fetch(imageUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error al obtener la imagen: ${res.statusText}`);
        }
        return res.blob();
      })
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = function () {
          const base64data = (reader.result as string).split(",")[1];
          console.log("Imagen convertida a Base64.");

          const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:Lweb Schweiz
ORG:Lweb
ADR:;;Chalberweidstrasse 38;Sevelen;;9475;Switzerland
TEL:0765608645
EMAIL:info@lweb.ch
URL:https://lweb.ch
PHOTO;ENCODING=b;TYPE=JPEG:${base64data}
END:VCARD`;



          const vCardBlob = new Blob([vCardContent], { type: "text/vcard;charset=utf-8" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(vCardBlob);
          link.download = "Lweb_Visitenkarte.vcf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          console.log("Archivo .vcf descargado con imagen.");
        };
        reader.onerror = function (error) {
          console.error("Error al leer la imagen:", error);
          alert("Ocurrió un error al procesar la imagen para la tarjeta de visita.");
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error("Error al cargar la imagen:", error);
        alert("Ocurrió un error al descargar la tarjeta de visita. Se descargará sin imagen.");

        // Crear vCard sin la imagen
        const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:Cantina TexMex
ORG:Cantina TexMex
ADR:;;Bahnhofstrasse 46;Sevelen;;9475;Switzerland
TEL:081 750 19 11
EMAIL:info@cantinatexmex.ch
URL:https://cantinatexmex.ch
END:VCARD`;

        const vCardBlob = new Blob([vCardContent], { type: "text/vcard;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(vCardBlob);
        link.download = "Cantina_TexMex.vcf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log("Archivo .vcf descargado sin imagen.");
      });
};

export default handleDownloadVCard;
