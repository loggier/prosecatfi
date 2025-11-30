#!/bin/sh
# Instalar dependencias de CocoaPods
if [[ -f "../Podfile" ]]; then
    brew install cocoapods
    pod install
else
    # Intenta buscar el Podfile si la estructura de carpetas es diferente
    echo "Buscando Podfile..."
    find . -name "Podfile" -maxdepth 3
    # Ajusta este comando si tu Podfile está en una subcarpeta específica, ej:
    # cd ios/App && pod install
fi