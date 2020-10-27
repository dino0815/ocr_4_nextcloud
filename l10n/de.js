OC.L10N.register(
    "ocr",
    {
    "OCR" : "Texterkennung",
    "Optical character recognition" : "Texterkennung",
    "Text recognition for your images" : "Texterkennung für Deine Bilder",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff, bmp) and saves the output PDF file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 16 and up](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Tesseract traineddata needs about 200 MB space on your server (will be installed automatically).\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](https://apps.nextcloud.com/apps/ocr) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Note\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort.\nMoreover this project is based on a webassembly port of tesseract. The maintainer stopped working on PDF processing in this app and will start working on separate app for pdf handling." : "# Beschreibung\n\nDie Nextcloud-OCR-Verarbeitung (optische Zeichenerkennung) für Bilder mit tesseract-js bringt OCR-Fähigkeit in Ihre Nextcloud.\nDie App verwendet tesseract-js im Browser, um Bilder (png, jpeg, tiff, bmp) zu verarbeiten und speichert die Ausgabe-PDF-Datei im Quellordner in Nextcloud. Das ermöglicht beispielsweise die Suche darin.\n\n## Voraussetzungen, Anforderungen und Abhängigkeiten\nDie OCR-App hat einige Voraussetzungen:\n\n- [Nextcloud 16 und höher](https://nextcloud.com/)\n\n- Wird nur von den neuesten modernen Webbrowsern (Chrome, Edge, Firefox, Opera, Safari*) unterstützt.\n\n- Tesseract traineddata benötigt ca. 200 MB Platz auf Ihrem Server (wird automatisch installiert).\n\n\n_* Auf Safari gibt es derzeit ein Problem mit der [Content-Security-Policy] (https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), das einen Administrator dazu zwingt, die 'script-src' auf 'unsafe-eval' zu setzen, so dass die Anwendung korrekt funktioniert. Da dies recht unsicher ist, setzt die App selbst diese Einstellung nicht und empfiehlt, dies auf eigenes Risiko zu entscheiden (bitte stelle sicher, dass Du weisst, was CSP ist und was z.B. unsafe-eval verursacht)._\n\n## Installation\nInstalliere die App aus dem [Nextcloud AppStore](https://apps.nextcloud.com/apps/ocr) oder lade das Release-Paket von GitHub herunter (**NICHT** die Quellen) und platziere den Inhalt in **nextcloud/apps/ocr/**.\n\n## Haftungsausschluss\nDie Software wird auf einer \"AS IS\"-Basis verteilt, OHNE GARANTIEN ODER\nBEDINGUNGEN JEGLICHER ART, entweder ausdrücklich oder stillschweigend.\n\n## Anmerkung\nDie Version 3 und frühere Versionen werden vom Autor nicht mehr unterstützt/gepflegt. Für die asynchrone Hintergrundverarbeitung solltest du daher das Repository teilen und den \" not-maintained\"-Zweig verwenden, um an Verbesserungen zu arbeiten. Der Autor konnte diese wegen zu großem Aufwand nicht unterstützen.\nAußerdem basiert dieses Projekt auf einem Webassembly-Port von tesseract. Der Maintainer hat die Arbeit an der PDF-Verarbeitung in dieser App eingestellt und wird mit der Arbeit an einer separaten App für die PDF-Bearbeitung beginnen.",
    "Target file already exists:" : "Zieldatei bereits vorhanden:",
    "An unexpected error occured during the load of your favorite languages. No language will be set instead." : "Ein unerwarteter Fehler trat während des Ladens Deiner favorisierten Sprachen auf. Stattdessen wird keine Sprache gesetzt.",
    "An unexpected error occured during the upload of the processed file." : "Ein unerwarteter Fehler trat während des Hochladens der verarbeiteten Datei auf.",
    "An unexpected error occured during the deletion of the original file." : "Ein unerwarteter Fehler trat beim Löschen der Ursprungsdatei auf.",
    "An unexpected error occured during Tesseract processing." : "Ein unerwarteter Fehler trat bei der Verarbeitung durch Tesseract auf.",
    "OCR processing failed:" : "Texterkennung fehlgeschlagen:",
    "MIME type not supported." : "MIME-Typ nicht unterstützt.",
    "Process" : "Verarbeiten",
    "A large number of files may take a very long time." : "Eine große Anzahl an Dateien kann sehr viel Zeit in Anspruch nehmen.",
    "{file}/{files} Files successfully processed" : "{file}/{files} Dateien erfolgreich verarbeitet",
    "_%n file is being processed:_::_%n files are being processed:_" : ["%n Datei wird verarbeitet:","%n Dateien werden verarbeitet:"],
    "_Delete original file (image)_::_Delete original files (images)_" : ["Originaldatei (Bild) löschen","Originaldateien (Bilder) löschen"],
    "_%n file_::_%n files_" : ["%n Datei","%n Dateien"],
    "Afrikaans" : "Afrikaans",
    "Arabic" : "Arabisch",
    "Azerbaijani" : "Aserbaidschanisch",
    "Belarusian" : "belarusisch",
    "Bengali" : "Bengalisch",
    "Bulgarian" : "Bulgarisch",
    "Catalan" : "Katalanisch",
    "Czech" : "Tschechisch",
    "Chinese" : "Chinesisch",
    "Traditional Chinese" : "Traditionelles Chinesisch",
    "Cherokee" : "Cherokee",
    "Danish" : "Dänisch",
    "German" : "Deutsch",
    "Greek" : "Griechisch",
    "English" : "Englisch",
    "English (Old)" : "Mittelenglisch (Alt)",
    "Esperanto" : "Esperanto",
    "Esperanto alternative" : "Esperanto alternativ",
    "Math" : "Mathematisch (Gleichungserkennung)",
    "Estonian" : "Estnisch",
    "Basque" : "Baskisch",
    "Persian (Farsi)" : "Persisch (Farsi / Iran)",
    "Finnish" : "Finnisch",
    "French" : "Französisch",
    "Frankish" : "Altfränkisch",
    "French (Old)" : "Altfranzösisch",
    "Galician" : "Galicisch",
    "Ancient Greek" : "Altgriechisch",
    "Hebrew" : "Hebräisch",
    "Hindi" : "Hindi",
    "Croatian" : "Kroatisch",
    "Hungarian" : "Ungarisch",
    "Indonesian" : "Indonesisch",
    "Icelandic" : "Isländisch",
    "Italian" : "Italienisch",
    "Italian (Old)" : "Altitalienisch",
    "Japanese" : "Japanisch",
    "Kannada" : "Kanaresisch",
    "Korean" : "Koreanisch",
    "Latvian" : "Lettisch",
    "Lithuanian" : "Litauisch",
    "Malayalam" : "Malayalam",
    "Macedonian" : "Mazedonisch",
    "Maltese" : "Maltesisch",
    "Malay" : "Malaiisch",
    "Dutch" : "Niederländisch",
    "Norwegian" : "Norwegisch",
    "Polish" : "Polnisch",
    "Portuguese" : "Portugiesisch",
    "Romanian" : "Rumänisch",
    "Russian" : "Russisch",
    "Slovakian" : "Slovakisch",
    "Slovenian" : "Slowenisch",
    "Spanish" : "Spanisch",
    "Old Spanish" : "Altspanisch",
    "Albanian" : "Albanisch",
    "Serbian (Latin)" : "Serbisch (Latein)",
    "Swahili" : "Swahili (Suaheli)",
    "Swedish" : "Schwedisch",
    "Tamil" : "Tamilisch",
    "Telugu" : "Telugu",
    "Tagalog" : "Tagalog",
    "Thai" : "Thailändisch",
    "Turkish" : "Türkisch",
    "Ukrainian" : "Ukrainisch",
    "Vietnamese" : "Vietnamesisch",
    "Press enter to select" : "Zum Auswählen die Eingabetaste drücken",
    "Press enter to remove" : "Zum Entfernen die Eingabetaste drücken",
    "Selected" : "Ausgewählt",
    "No matches found" : "Keine Übereinstimmungen gefunden",
    "Select language" : "Sprache wählen",
    "Save" : "Speichern",
    "An unexpected error occured during save of your favorite languages. Please try again." : "Ein unerwarteter Fehler trat während des Speicherns Deiner favorisierten Sprachen auf. Bitte versuche es erneut.",
    "An unexpected error occured during load of your favorite languages. Please try again." : "Ein unerwarteter Fehler trat während des Ladens Deiner favorisierten Sprachen auf. Bitte versuche es erneut.",
    "An error occured during save of your favorite languages. Please check your input." : "Ein unerwarteter Fehler trat während des Speicherns deiner favorisierten Sprachen auf. Bitte überprüfe deine Eingabe.",
    "Selected languages will be preselected by default in the OCR dialog." : "Hier ausgewählte Sprachen werden im Texterkennungsdialog als Standard vorausgewählt.",
    "Favorite languages" : "Favorisierte Sprachen"
},
"nplurals=2; plural=(n != 1);");
