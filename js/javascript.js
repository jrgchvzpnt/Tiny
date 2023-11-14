function crearheader(doc,direccionX,inicio,abajo) {
         // ************************ INCIO DEL HEADER *********************************
    doc.setFontSize(9);
    doc.setFont("Arial", "bold");
    doc.text("Fecha:", inicio, abajo);
    doc.setFont("Arial", "");
    doc.text("MARTES, 22 DE OCTUBRE DE 2023", direccionX, abajo  );

    doc.setFont("Arial", "bold");
    doc.text("Paciente:", inicio, abajo+6);
    doc.setFont("Arial", "");
    doc.text("JORGE ERNESTO CHAVEZ PUENTE", direccionX, abajo+6 );
   
    doc.setFont("Arial", "bold");
    doc.text("Edad:", inicio, abajo+12);
    doc.setFont("Arial", "");
    doc.text("70 AÑOS", direccionX, abajo+12);

    doc.setFont("Arial", "bold");
    doc.text("Fecha de Nacimiento: ", 105, abajo+12);
    doc.setFont("Arial", "");
    doc.text("08/OCT/1985", 150,  abajo+12);

    doc.setFont("Arial", "bold");
    doc.text("Sexo:", inicio, abajo+18);
    doc.setFont("Arial", "");
    doc.text("MASCULINO", direccionX, abajo+18);

    doc.setFont("Arial", "bold");
    doc.text("Médico solicitante:", 105, abajo+18);
    doc.setFont("Arial", "");
    doc.text("AQC", 150, abajo+18);

    doc.setFont("Arial", "bold");
    doc.text("Sucursal: ", inicio, abajo+24);
    doc.setFont("Arial", "");
    doc.text("CULIACAN", direccionX, abajo+24);

    doc.setFont("Arial", "bold");
    doc.text("Nombre del estudio: ", inicio, abajo+30);
    doc.setFont("Arial", "");
    doc.text("ULTRASONIDO HIGADO Y VIAS BILIARES ", direccionX, abajo+30);

    // ************************ CIERRE DEL HEADER *********************************
  }


  function crearbody(doc,inicio,abajo){
                    
    doc.setFont("Arial", "bold");
    doc.text("Indicación del estudio: ___ ", inicio, abajo+45);

    doc.setFont("Arial", "bold");
    let textWidth = doc.getTextWidth("Indicación del estudio:");
    doc.line(inicio, abajo + 45.2, inicio + textWidth-10 , abajo + 45.2);


    doc.text("Técnica: ", inicio, abajo + 55);
    doc.setFont("Arial", "");


    textWidth = doc.getTextWidth("Técnica:");
    doc.line(inicio, abajo + 55.2, inicio + textWidth-4 , abajo + 55.2);

    let textoLargo = "Se realizó estudio ultrasonográfico abdominal con transductor convexo multifrecuencia de alta resolución en tiempo real observando lo siguiente:";
    const maxWidth = 180;
    const lineHeight = 3; // Ajusta según sea necesario

    // Divide el texto en líneas que quepan dentro del maxWidth
    let lines = doc.splitTextToSize(textoLargo, maxWidth);

    // Calcula la posición inicial y final del texto después de "Técnica:"
    const textWidthTechnique = doc.getStringUnitWidth("Técnica:") ;
    const startXTextAfterTechnique = inicio  + textWidthTechnique;

    // Imprime cada línea a la posición adecuada, alineando a la derecha de "Técnica:"
    lines.forEach((line, index) => {
        doc.text(line, 32, abajo + 55 + index * lineHeight);
    });

    doc.setFont("Arial", "bold");
    doc.text("Hallazgos: ", inicio, abajo + 65);

    doc.setFont("Arial", "bold");
    textWidth = doc.getTextWidth("Hallazgos:");
    doc.line(inicio, abajo + 65.2, inicio + textWidth-5 , abajo + 65.2);


    doc.setFont("Arial", "bold");
    doc.text("Hígado: ", inicio, abajo + 75);

    doc.setFont("Arial", "");
    textoLargo = "Con forma, contornos y ecogenicidad normales. Patrón ecográfico homogéneo. No se observa dilatación de vías biliares intrahepáticas: ";

    lines = doc.splitTextToSize(textoLargo, maxWidth);

    // Imprime cada línea a la posición adecuada
    lines.forEach((line, index) => {
        doc.text(line, inicio + 13, abajo + 75 + index * lineHeight);
    });

    doc.setFont("Arial", "bold");
    doc.text("Colédoco: ", inicio, abajo + 85);

    doc.setFont("Arial", "");
    doc.text("Tiene calibre de ___ mm. ", inicio +17, abajo + 85);

    doc.setFont("Arial", "bold");
    doc.text("Vena porta: ", inicio +55, abajo + 85);
    doc.setFont("Arial", "");
    doc.text("con calibre de ___ mm. ", inicio + 75, abajo + 85);

    doc.setFont("Arial", "bold");
    doc.text("Vesícula biliar: ", inicio, abajo + 95);

    doc.setFont("Arial", "");
    textoLargo = "Muestra forma y contornos normales. Mide ___ mm, en su diámetro longitudinal, anteroposterior y transversal respectivamente. Pared con espesor de ___ mm. No identifico litos en su interior. ";
    lines = doc.splitTextToSize(textoLargo, maxWidth);
     // Imprime cada línea a la posición adecuada
     lines.forEach((line, index) => {
        doc.text(line, inicio + 23, abajo + 95 + index * lineHeight);
    });

    doc.setFont("Arial", "bold");
    doc.text("Páncreas: ", inicio, abajo + 105);
 


    doc.setFont("Arial", "");
    textoLargo = "Con forma, tamaño y contornos normales, patrón ecográfico homogéneo. No observo colecciones en el espacio peripancreático.";
    lines = doc.splitTextToSize(textoLargo, maxWidth);
     // Imprime cada línea a la posición adecuada
     lines.forEach((line, index) => {
        doc.text(line, inicio + 16, abajo + 105 + index * lineHeight);
    });

    doc.setFont("Arial", "bold");
    doc.text("Bazo: ", inicio, abajo + 115);
   
    doc.setFont("Arial", "");
    doc.text("Con forma, contornos y patrón ecográfico normal, mide ___ mm en diámetro máximo.: ", inicio + 10, abajo + 115);

    doc.setFont("Arial", "bold");
    doc.text("Riñones: ", inicio, abajo + 125);

    doc.setFont("Arial", "");
    textoLargo = "Presentan forma, contornos y patrón ecográfico normales. Adecuada diferenciación cortico-medular. Relación parénquima/seno normal. ";
    lines = doc.splitTextToSize(textoLargo, maxWidth);
     // Imprime cada línea a la posición adecuada
     lines.forEach((line, index) => {
        doc.text(line, inicio + 14, abajo + 125 + index * lineHeight);
    });

    doc.setFont("Arial", "bold");
    doc.text("Vejiga urinaria: ", inicio, abajo + 190);

    doc.setFont("Arial", "");
    textoLargo = "Con repleción adecuada al momento del estudio. Muestra forma, contornos y patrón ecográfico normales. Pared con espesor de ___ mm. No se observan lesiones murales. Anecogénica en su interior. ";
    lines = doc.splitTextToSize(textoLargo, maxWidth);
     // Imprime cada línea a la posición adecuada
     lines.forEach((line, index) => {
        doc.text(line, inicio + 24, abajo + 190 + index * lineHeight);
    });

    doc.setFont("Arial", "bold");
    doc.text("Próstata", inicio, abajo + 200);

    doc.setFont("Arial", "");
    textoLargo = "muestra forma y contornos normales, con patrón ecográfico homogéneo, mide ___ mm en su diámetro";
    lines = doc.splitTextToSize(textoLargo, maxWidth);
     // Imprime cada línea a la posición adecuada
     lines.forEach((line, index) => {
        doc.text(line, inicio + 24, abajo + 200 + index * lineHeight);
    });
    }

    function generartable(doc) 
            {
                const headers = ["Dimensiones", "Diámetro longitudinal", "Diámetro anteroposterior", "Diámetro transversal", "Espesor cortical"];

                const data = [
                    ["Riñón derecho", "___mm", "___mm", "___mm", "___mm"],
                    ["Riñón izquierdo", "___mm", "___mm", "___mm", "___mm"]
                ];

                // Configuración de la tabla con diferentes colores de fondo para la cabecera y el cuerpo
                const tableConfig = {
                    startY: 165,
                    startX: 5,
                    head: [headers],
                    body: data,
                    styles: {
                        head: { fillColor: [128, 128, 128], textColor: [0, 0, 0], align: "center" }, // Cabecera con fondo gris
                    }
                };

                doc.autoTable(tableConfig);
            }


            
            function generarbarcode(doc){

                // Adding a barcode
                JsBarcode("#barcode", "*RSV729551072*", {
                    format: "CODE128",
                    displayValue: true
                });

                // Adding barcode to PDF
                const barcodeSVG = document.querySelector('#barcode');
                const svgData = barcodeSVG.outerHTML;

                const imgBarcode = new Image();
                imgBarcode.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));

                // Obtiene la posición X y Y para la adición del código de barras
                const barcodeX = 105; // Ajusta según sea necesario
                const barcodeY = 15;  // Ajusta según sea necesario

                imgBarcode.onload = function() {
                    const canvasBarcode = document.createElement('canvas');
                    canvasBarcode.width = imgBarcode.width;
                    canvasBarcode.height = imgBarcode.height;
                    const contextBarcode = canvasBarcode.getContext('2d');
                    contextBarcode.drawImage(imgBarcode, 0, 0);
                    const imageDataBarcode = canvasBarcode.toDataURL('image/png');
                    doc.addImage(imageDataBarcode, 'PNG', barcodeX, barcodeY, 50, 15);

                    // Save PDF
                  
                };
            }

            function generarfooter(doc){
                const pageCount = doc.internal.getNumberOfPages();
                doc.setFontSize(10);
                for (let i = 1; i <= pageCount; i++) {
                    doc.setPage(i);
                    doc.text(`Pagína ${i} of ${pageCount}`, 150, 285);
                }
            }
