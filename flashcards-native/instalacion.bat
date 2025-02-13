@echo off
echo Instalando dependencias...

echo Instalando React Navigation...
call npm install @react-navigation/native @react-navigation/stack || exit /b

echo Instalando React Native Elements (RNE UI)...
call npm install @rneui/themed @rneui/base || exit /b

echo Instalación completa!
pause