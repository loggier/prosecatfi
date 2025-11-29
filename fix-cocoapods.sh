#!/bin/bash

echo "🔧 Limpiando CocoaPods incompatible con Ruby 2.6..."
echo ""

# Paso 1: Desinstalar versiones incompatibles
echo "📦 Desinstalando gemas incompatibles..."
sudo gem uninstall cocoapods --all --executables --ignore-dependencies
sudo gem uninstall cocoapods-core --all --ignore-dependencies
sudo gem uninstall cocoapods-deintegrate --all --ignore-dependencies
sudo gem uninstall cocoapods-downloader --all --ignore-dependencies
sudo gem uninstall cocoapods-plugins --all --ignore-dependencies
sudo gem uninstall cocoapods-search --all --ignore-dependencies
sudo gem uninstall cocoapods-trunk --all --ignore-dependencies
sudo gem uninstall cocoapods-try --all --ignore-dependencies
sudo gem uninstall activesupport --all --ignore-dependencies

echo ""
echo "✅ Desinstalación completada"
echo ""

# Paso 2: Instalar versiones compatibles
echo "📦 Instalando versiones compatibles con Ruby 2.6..."
sudo gem install activesupport -v 5.2.8.1
sudo gem install cocoapods -v 1.11.3

echo ""
echo "✅ Instalación completada"
echo ""

# Paso 3: Verificar instalación
echo "🔍 Verificando instalación..."
echo ""
echo "Versión de CocoaPods:"
pod --version
echo ""
echo "Versión de ActiveSupport:"
gem list | grep activesupport
echo ""

# Paso 4: Instalar pods
echo "📱 Instalando pods en tu proyecto iOS..."
cd "/Users/raulmartinez/Library/Mobile Documents/com~apple~CloudDocs/Vemontech/Ivan/app/prosecatfi/app/prosecatfi/ios/App"
pod install

echo ""
echo "🎉 ¡Proceso completado! Ahora puedes abrir el proyecto en Xcode."
echo "   Usa el archivo .xcworkspace (NO el .xcodeproj)"
