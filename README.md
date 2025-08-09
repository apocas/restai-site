# RESTai - Institutional Website

This is the official website for RESTai, an AI as a Service platform designed specifically for Small and Medium Businesses (SMBs).

## About RESTai

RESTai is an enterprise-grade AI platform that provides:

- **Multi-tenancy** with workgroups and project management
- **OpenAI API compatibility** for seamless integration
- **Comprehensive AI features**:
  - Text inference and generation
  - RAG (Retrieval-Augmented Generation)
  - Image generation
  - Audio transcription
  - Multimodal AI capabilities

## Website Features

- Modern, responsive design built with Next.js and Tailwind CSS
- Professional landing page showcasing platform capabilities
- Pricing plans for different business needs
- Contact forms and business information
- SEO optimized and fast loading

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Static export ready

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run build && npm run export
```

## Deployment

The website is configured for static export and can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any CDN or web server

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features showcase
│   ├── Pricing.tsx      # Pricing plans
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Site footer
└── public/              # Static assets
```

## Credits

Built by the same team that created [dockerode](https://github.com/apocas/dockerode) with 5k+ stars on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.