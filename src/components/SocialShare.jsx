import { useState } from 'react'

export default function SocialShare({ title = "FR LEY | Web Designer & Developer", text = "Check out FR LEY's Web Design & Development Portfolio!", url = window.location.href, layout = "bar" }) {
  const [copied, setCopied] = useState(false)

  const shareData = {
    title,
    text,
    url,
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log('Share error:', err)
        }
      }
    } else {
      copyToClipboard()
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const encodedUrl = encodeURIComponent(url)
  const encodedText = encodeURIComponent(`${text} ${url}`)

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: '💬',
      color: 'bg-[#25D366] text-white hover:bg-[#20bd5a]',
      href: `https://api.whatsapp.com/send?text=${encodedText}`,
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      color: 'bg-[#0A66C2] text-white hover:bg-[#084e96]',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: 'Twitter / X',
      icon: '𝕏',
      color: 'bg-black text-white hover:bg-neutral-800',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodedUrl}`,
    },
    {
      name: 'Facebook',
      icon: '👍',
      color: 'bg-[#1877F2] text-white hover:bg-[#125ecc]',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ]

  if (layout === "compact") {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={handleNativeShare}
          className="inline-flex items-center gap-1.5 bg-amber/15 text-amber hover:bg-amber hover:text-white font-mono text-xs font-extrabold px-3 py-1.5 rounded-xl transition-all shadow-sm"
          title="Share via device options or copy link"
        >
          <span>🔗 Share</span>
        </button>
        {copied && (
          <span className="font-mono text-[11px] text-crimson font-bold animate-fade-in">
            Copied!
          </span>
        )}
      </div>
    )
  }

  return (
    <div className="bg-white border border-amber-900/10 p-5 rounded-[24px] shadow-xl shadow-amber-900/5 my-4">
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 bg-ink text-white border border-amber px-6 py-3.5 rounded-2xl shadow-2xl font-mono text-xs font-bold flex items-center gap-2 animate-fade-in">
          <span className="text-amber text-base">✓</span> Link copied to clipboard!
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] text-amber font-extrabold uppercase tracking-wider">SHARE ON SOCIAL MEDIA</p>
          <p className="font-body text-xs text-steel font-bold mt-0.5">Share this portfolio directly on your networks</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Native Web Share Button if supported */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="inline-flex items-center gap-2 bg-amber text-white font-body text-xs font-bold px-4 py-2.5 rounded-xl shadow-md hover:bg-amber-hover hover:-translate-y-0.5 transition-all"
            >
              <span>📲 Share Now</span>
            </button>
          )}

          {/* Social Network Share Links */}
          {shareLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 ${item.color} font-body text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-sm hover:-translate-y-0.5 transition-all`}
              title={`Share on ${item.name}`}
            >
              <span>{item.icon}</span>
              <span className="hidden sm:inline">{item.name}</span>
            </a>
          ))}

          {/* Copy Link Button */}
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center gap-1.5 bg-canvas border border-amber-900/15 text-ink hover:border-amber font-body text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-sm transition-all"
            title="Copy URL to Clipboard"
          >
            <span>📋</span>
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
