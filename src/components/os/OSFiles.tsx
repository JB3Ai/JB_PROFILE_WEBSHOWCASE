import { Download } from 'lucide-react';

interface FileItem {
  label: string;
  url: string;
}

const intelligenceBriefings: FileItem[] = [
  {
    label: 'Dual-Layer Intelligence: Eagle Star X JB³Ai',
    url: '/assets/pdfs/Dual-Layer Intelligence for Eagle StarXJB³Ai-compressed.pdf',
  },
  {
    label: 'JB³Ai Forensic Intelligence Systems Overview',
    url: '/assets/pdfs/JB³Ai Forensic Intelligence Systems OverviewV2-compressed.pdf',
  },
];

const systemRecords: FileItem[] = [
  { label: 'OS³ InvestigatorAi Cutsheet', url: '/assets/pdfs/OS³ InvestigatorAi CUTSHEET.pdf' },
  { label: 'OS³ NewsRoomAi Cutsheet', url: '/assets/pdfs/OS³ NewsRoomAi CUTSHEET.pdf' },
  { label: 'OS³ ClipboardAi Cutsheet', url: '/assets/pdfs/OS³ ClipboardAi CUTSHEET.pdf' },
  { label: 'Jonathan Blackburn: Executive Resume', url: '/assets/pdfs/Jonathan_Blackburn_Premium_Resume.pdf' },
];

function FileRow({ file }: { file: FileItem }) {
  return (
    <a
      href={file.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-copper-500/40 hover:bg-white/10 transition-colors group"
    >
      <Download className="w-4 h-4 text-copper-400 shrink-0" />
      <span className="text-sm text-white/80 group-hover:text-white transition-colors">{file.label}</span>
    </a>
  );
}

export default function OSFiles() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-white/60 leading-relaxed">
        Confidential briefings and system architecture records for cleared portal members.
      </p>
      <div>
        <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Intelligence Briefings</p>
        <div className="space-y-2">
          {intelligenceBriefings.map(f => <FileRow key={f.url} file={f} />)}
        </div>
      </div>
      <div>
        <p className="text-xs text-white/40 uppercase tracking-wider mb-2">System Architecture &amp; Records</p>
        <div className="space-y-2">
          {systemRecords.map(f => <FileRow key={f.url} file={f} />)}
        </div>
      </div>
    </div>
  );
}
