export function doDownload(url: string, fileName: string) {
  const a = document.createElement("a");
  a.download = fileName;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export const downloadCanvasQRCode = () => {
  const canvas = document
    .getElementById("myqrcode")
    ?.querySelector<HTMLCanvasElement>("canvas");
  if (canvas) {
    const url = canvas.toDataURL();
    doDownload(url, `QRCode-${Date.now()}.png`);
  }
};

export const copyCanvasQRCode = async () => {
  const canvas = document
    .getElementById("myqrcode")
    ?.querySelector<HTMLCanvasElement>("canvas");
  if (canvas) {
    const url = canvas.toDataURL();
    return new Promise<void>((resolve) => {
      canvas.toBlob(async (blob) => {
        await navigator.clipboard.write([
          // @ts-ignore
          new ClipboardItem({ "image/png": blob }),
        ]);
        resolve();
      }, "image/png");
    });
  }
};

export const downloadSvgQRCode = () => {
  const svg = document
    .getElementById("myqrcode")
    ?.querySelector<SVGElement>("svg");
  const svgData = new XMLSerializer().serializeToString(svg!);
  const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  doDownload(url, `QRCode-${Date.now()}.svg`);
};
