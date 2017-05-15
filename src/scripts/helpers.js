export const shortener = (summary, full, skip) => {
  if (!skip) {
    return full;
  }

  return `
    <a class="skip" onClick="this.classList.toggle('unfold')">
      <div>${summary}</div>
      <div>${full}</div>
    </a>
  `;
}
