class VideoContainer extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow DOM
      this.attachShadow({ mode: 'open' });
  
      // Create a template
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          :host { /* Styles for the custom element itself */
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
            width: 90%;
            max-width: 1400px;
            padding: 1rem;
            padding-top: 0;
          }
  
          .videos {
            display: flex;
            gap: 20px;
            width: 100%;
            justify-content: center;
          }
  
          h2 {
            margin-bottom: 10px;
            margin-left: 10px;
            text-align: left;
            width: 100%;
          }
  
          video {
            width: 90%;
            max-width: 600px;
            border-radius: 8px;
          }
        </style>
        <div class="video-container">
          <h2></h2> <div class="videos"></div>
        </div>
      `;
  
      // Clone the template and append it to the shadow DOM
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    static get observedAttributes() {
      return ['title', 'video1-src', 'video2-src'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'title') {
        this.shadowRoot.querySelector('h2').textContent = newValue;
      }
      if (name === 'video1-src') {
          const video1 = document.createElement('video')
          video1.width = 600
          video1.height = 400
          video1.controls = true
          video1.autoplay = true
          video1.muted = true
          video1.allowFullscreen = true
          const source = document.createElement('source')
          source.src = newValue
          source.type = "video/mp4"
          video1.appendChild(source)
        this.shadowRoot.querySelector('.videos').appendChild(video1);
      }
      if (name === 'video2-src') {
          const video2 = document.createElement('video')
          video2.width = 600
          video2.height = 400
          video2.controls = true
          video2.autoplay = true
          video2.muted = true
          video2.allowFullscreen = true
          const source = document.createElement('source')
          source.src = newValue
          source.type = "video/mp4"
          video2.appendChild(source)
        this.shadowRoot.querySelector('.videos').appendChild(video2);
      }
    }
  }
  
  // Define the custom element
  customElements.define('video-container', VideoContainer);