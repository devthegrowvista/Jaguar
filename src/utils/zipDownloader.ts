export function downloadProjectZip() {
  const link = document.createElement('a');
  link.href = '/jaguar-services-site.zip';
  link.download = 'jaguar-services-site.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
