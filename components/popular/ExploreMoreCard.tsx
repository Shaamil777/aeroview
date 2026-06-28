type ExploreMoreCardProps = {
  title: string;
  subtitle: string;
};

export default function ExploreMoreCard({ title, subtitle }: ExploreMoreCardProps) {
  return (
    <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-dashed border-border-subtle hover:bg-aviation/5 hover:border-aviation/30 transition-all duration-300 cursor-pointer group flex flex-col justify-center h-auto sm:h-[170px]">
      <div className="w-14 h-14 bg-[#E2E8F0] rounded-full flex items-center justify-center mb-4 group-hover:bg-aviation/20 transition-colors">
        <svg className="w-7 h-7 text-navy group-hover:text-aviation transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-navy text-lg">{title}</h4>
          <p className="text-text-secondary text-sm">{subtitle}</p>
        </div>
        <div className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-navy group-hover:bg-navy group-hover:text-white transition-colors text-text-secondary">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
