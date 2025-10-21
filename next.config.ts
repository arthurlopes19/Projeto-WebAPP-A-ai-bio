import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Este é o que já tínhamos para o avatar
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
      // --- ADICIONE ESTE NOVO BLOCO ---
      {
        protocol: 'https',
        hostname: 'cdna.artstation.com', // O novo domínio
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig