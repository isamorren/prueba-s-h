# Inventario de Fuentes

## BundayClean
**Ubicación:** `/home/isamorren/sodimac-muebles/src/assets/fonts/bunday-clean/`

### Regular
- `Buntype-BundayClean-Regu.woff2` (Prioridad 1 - Formato web moderno)
- `Buntype-BundayClean-Regu.woff` (Prioridad 2 - Formato web)
- `Buntype-BundayClean-Regu.ttf` (Prioridad 3 - Formato desktop)
- `Buntype-BundayClean-Regu.eot` (IE legacy)
- `Buntype-BundayClean-Regu.otf`
- `Buntype-BundayClean-Regu.svg`

### Bold
- `Buntype-BundayClean-Bold.woff2` (Prioridad 1 - Formato web moderno)
- `Buntype-BundayClean-Bold.woff` (Prioridad 2 - Formato web)
- `Buntype-BundayClean-Bold.ttf` (Prioridad 3 - Formato desktop)
- `Buntype-BundayClean-Bold.eot` (IE legacy)
- `Buntype-BundayClean-Bold.otf`
- `Buntype-BundayClean-Bold.svg`

## Lato
**Ubicación:** `/home/isamorren/sodimac-muebles/src/assets/fonts/lato/`

### Regular
- `Lato-Regular.woff` (Prioridad 1 - Formato web)
- `Lato-Regular.ttf` (Prioridad 2 - Formato desktop)

### Bold
- `Lato-Bold.woff` (Prioridad 1 - Formato web)
- `Lato-Bold.ttf` (Prioridad 2 - Formato desktop)

## Fixture
**Ubicación:** `/home/isamorren/sodimac-muebles/src/assets/fonts/fixture/`

### Regular
- `Sudtipos - Fixture Regular.otf` (Formato desktop)

### Bold
- `Sudtipos - Fixture Bold.otf` (Formato desktop)

## Miso
**Ubicación:** `/home/isamorren/sodimac-muebles/src/assets/fonts/miso/`

### Regular
- `miso-regular-webfont.ttf` (Formato web)
- `miso.otf` (Formato desktop)

### Bold
- `miso-bold.otf` (Formato desktop)

## Declaraciones @font-face Recomendadas

### BundayClean
```css
@font-face {
  font-family: 'BundayClean';
  src: url('./bunday-clean/Buntype-BundayClean-Regu.woff2') format('woff2'),
       url('./bunday-clean/Buntype-BundayClean-Regu.woff') format('woff'),
       url('./bunday-clean/Buntype-BundayClean-Regu.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'BundayClean';
  src: url('./bunday-clean/Buntype-BundayClean-Bold.woff2') format('woff2'),
       url('./bunday-clean/Buntype-BundayClean-Bold.woff') format('woff'),
       url('./bunday-clean/Buntype-BundayClean-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

### Lato
```css
@font-face {
  font-family: 'Lato';
  src: url('./lato/Lato-Regular.woff') format('woff'),
       url('./lato/Lato-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Lato';
  src: url('./lato/Lato-Bold.woff') format('woff'),
       url('./lato/Lato-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

### Fixture
```css
@font-face {
  font-family: 'Fixture';
  src: url('./fixture/Sudtipos - Fixture Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Fixture';
  src: url('./fixture/Sudtipos - Fixture Bold.otf') format('opentype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```

### Miso
```css
@font-face {
  font-family: 'Miso';
  src: url('./miso/miso-regular-webfont.ttf') format('truetype'),
       url('./miso/miso.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Miso';
  src: url('./miso/miso-bold.otf') format('opentype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
```