import React from 'react'
import { videos } from '../content/videos.content'
import VideoCard from '../components/cards/VideoCard'

const featured = videos[0]

export default function VideoVaultSection() {
  return (
    <section className="py-16 bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-bold">Video Vault</h2>
            <p className="text-gray-400 mt-2">Founder briefings, product demos, project walkthroughs, media clips, and GTR3 teasers.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl bg-surface/80 border border-white/10 p-6 shadow-xl">
              <div className="h-72 rounded-3xl bg-slate-900/90 flex items-center justify-center text-slate-400">Featured video placeholder</div>
              <div className="mt-5">
                <div className="text-sm text-cyan-300">{featured.category}</div>
                <h3 className="text-2xl font-semibold mt-2">{featured.title}</h3>
                <p className="mt-3 text-gray-300">{featured.summary}</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 bg-sky-500 text-black rounded">Watch Video</button>
                  <button className="px-4 py-2 bg-slate-700 text-white rounded">View Project</button>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              {videos.slice(1).map((video) => (
                <div key={video.id} className="rounded-3xl bg-surface/80 border border-white/10 p-4">
                  <h4 className="font-semibold text-white">{video.title}</h4>
                  <p className="text-sm text-gray-300 mt-2">{video.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
