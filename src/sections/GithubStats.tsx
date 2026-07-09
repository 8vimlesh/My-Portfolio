import { SectionWrapper } from "../components/layout/SectionWrapper";
import { Star, GitCommit, GitPullRequest, GitFork } from "lucide-react";
import { GithubIcon as Github } from "../components/ui/icons";
import { Card } from "../components/ui/Card";

export function GithubStats() {
  // Static placeholder data for the visually appealing representation
  const stats = [
    { label: "Total Stars", value: "128", icon: Star, color: "text-yellow-500" },
    { label: "Total Commits", value: "1,024+", icon: GitCommit, color: "text-emerald-500" },
    { label: "Pull Requests", value: "42", icon: GitPullRequest, color: "text-blue-500" },
    { label: "Repositories", value: "35", icon: GitFork, color: "text-purple-500" },
  ];

  // Simulating a contribution graph (52 weeks x 7 days)
  const weeks = Array.from({ length: 52 });
  
  return (
    <SectionWrapper id="github">
      <div className="flex flex-col gap-10 items-center text-center">
        <div>
          <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-full mb-4 text-emerald-500">
            <Github className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Open Source Contributions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I actively contribute to open-source projects and maintain a consistent coding streak. Here is a snapshot of my GitHub activity.
          </p>
        </div>

        <div className="w-full max-w-5xl">
          <Card className="glass border-white/5 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl bg-background/50 border border-border">
                    <Icon className={`w-6 h-6 mb-2 ${stat.color}`} />
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="w-full overflow-x-auto pb-4">
              <div className="min-w-[800px]">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2 px-2">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
                <div className="flex gap-1 justify-between">
                  {weeks.map((_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        // Randomize colors to simulate an active contribution graph
                        const intensity = Math.random();
                        let bgClass = "bg-emerald-950/30"; // Level 0 (no activity)
                        
                        if (intensity > 0.8) bgClass = "bg-emerald-500"; // Level 4 (high activity)
                        else if (intensity > 0.6) bgClass = "bg-emerald-600"; // Level 3
                        else if (intensity > 0.4) bgClass = "bg-emerald-700"; // Level 2
                        else if (intensity > 0.2) bgClass = "bg-emerald-800/60"; // Level 1
                        
                        // Make bottom rows slightly less active purely for aesthetics
                        if (dayIndex > 4 && intensity > 0.5) bgClass = "bg-emerald-800/60";

                        return (
                          <div 
                            key={dayIndex} 
                            className={`w-3 h-3 rounded-[2px] ${bgClass} transition-colors duration-300 hover:border hover:border-white/50`}
                            title={`${Math.floor(intensity * 10)} contributions`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mt-4">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-[2px] bg-emerald-950/30"></div>
                    <div className="w-3 h-3 rounded-[2px] bg-emerald-800/60"></div>
                    <div className="w-3 h-3 rounded-[2px] bg-emerald-700"></div>
                    <div className="w-3 h-3 rounded-[2px] bg-emerald-600"></div>
                    <div className="w-3 h-3 rounded-[2px] bg-emerald-500"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
