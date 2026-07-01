const icons = {
  x: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.9 10.5 21.3 2h-1.8l-6.4 7.4L8 2H2l7.8 11.3L2 22h1.8l6.8-7.8L16 22h6l-8.1-11.5Zm-2.4 2.7-.8-1.1L4.5 3.3h2.7l5 7.1.8 1.1 6.5 9.3h-2.7l-5.3-7.6Z"/></svg>',
  telegram:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.9 4.3 18.6 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6 13.5 1.1 12c-1.1-.3-1.1-1.1.2-1.6L20.4 3c.9-.3 1.7.2 1.5 1.3Z"/></svg>',
  youtube:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.9 12 4.9 12 4.9s-6 0-7.7.4a2.7 2.7 0 0 0-1.9 1.9A28.1 28.1 0 0 0 2 12a28.1 28.1 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.4 7.7.4 7.7.4s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9A28.1 28.1 0 0 0 22 12a28.1 28.1 0 0 0-.4-4.8ZM10 15.1V8.9l5.2 3.1L10 15.1Z"/></svg>',
  letter:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M4 6h16v12H4z"/><path fill="none" stroke="currentColor" stroke-width="2" d="m4 7 8 6 8-6"/></svg>',
  link: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1"/></svg>',
  wallet:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 7h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13v3"/><path fill="currentColor" d="M17 12.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z"/></svg>',
  arrow:
    '<svg class="arrow-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M7 17 17 7M9 7h8v8"/></svg>',
};

function icon(name) {
  return icons[name] || icons.link;
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.textContent = value;
}

function render() {
  const config = window.siteConfig;
  if (!config) return;

  document.title = `${config.profile.name} | Links`;
  const avatar = document.querySelector("[data-avatar]");
  if (avatar && config.profile.avatarUrl) {
    avatar.innerHTML = `<img src="${config.profile.avatarUrl}" alt="${config.profile.name} 头像" />`;
  } else {
    setText("[data-avatar]", config.profile.avatarText);
  }
  setText("[data-handle]", config.profile.handle);
  setText("[data-name]", config.profile.name);
  setText("[data-tagline]", config.profile.tagline);
  setText("[data-bio]", config.profile.bio);
  setText("[data-telegram]", config.profile.telegram);
  if (config.feature) {
    setText("[data-feature-title]", config.feature.title);
    setText("[data-feature-body]", config.feature.body);
  }

  const socials = document.querySelector("[data-socials]");
  socials.innerHTML = config.socials
    .map(
      (item) => `
        <a class="social-button" href="${item.url}" target="_blank" rel="noreferrer" aria-label="${item.label}">
          ${icon(item.icon)}
        </a>
      `
    )
    .join("");

  const links = document.querySelector("[data-links]");
  links.innerHTML = config.links
    .map(
      (item) => `
        <a class="link-card accent-${item.accent || "white"}" href="${item.url}" target="_blank" rel="noreferrer">
          <span class="link-icon">${icon(item.icon)}</span>
          <span class="link-content">
            <span class="link-title">${item.title}</span>
            <span class="link-description">${item.description || ""}</span>
          </span>
          ${icon("arrow")}
        </a>
      `
    )
    .join("");
}

render();
