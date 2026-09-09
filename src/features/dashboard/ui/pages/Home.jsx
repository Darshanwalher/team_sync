import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  ClipboardList,
  CheckCircle2,
  FolderGit2,
  Users,
  ChevronDown,
  Edit3,
  CheckCircle,
  UserPlus,
  AlertTriangle,
  Sparkles,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card'
import { Button } from '../../../../components/ui/button'
import { Badge } from '../../../../components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../../../../components/ui/avatar'

const stats = [
  {
    title: 'Total Tasks',
    value: '128',
    badge: '+12%',
    description: 'from last month',
    icon: ClipboardList
  },
  {
    title: 'Completed Tasks',
    value: '94',
    badge: '+5%',
    description: '73.4% completion rate',
    icon: CheckCircle2
  },
  {
    title: 'Active Projects',
    value: '12',
    badge: 'Active',
    description: '3 shipping this week',
    icon: FolderGit2
  },
  {
    title: 'Team Members',
    value: '42',
    badge: '8 New',
    description: '+4 joined recently',
    icon: Users
  }
]

const progressDays = [
  { day: 'Mon', height: '45%' },
  { day: 'Tue', height: '60%' },
  { day: 'Wed', height: '70%' },
  { day: 'Thu', height: '100%', active: true },
  { day: 'Fri', height: '55%' },
  { day: 'Sat', height: '40%' },
  { day: 'Sun', height: '35%' }
]

const activityTimeline = [
  {
    id: 1,
    icon: Edit3,
    user: 'Sarah Jenkins',
    action: 'updated',
    target: 'Landing Page Redesign',
    time: '2 hours ago'
  },
  {
    id: 2,
    icon: CheckCircle,
    user: 'Alex Rivera',
    action: 'completed',
    target: 'API Authentication Flow',
    time: '5 hours ago'
  },
  {
    id: 3,
    icon: UserPlus,
    user: 'Design Team',
    action: 'welcomed',
    target: 'Elena Rostova',
    time: 'Yesterday'
  },
  {
    id: 4,
    icon: AlertTriangle,
    user: 'System Alert',
    action: 'resolved',
    target: 'High Database Latency',
    time: 'Oct 12, 11:30 PM',
    isAlert: true
  }
]

const teamMembers = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Designer',
    status: 'In Meeting',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    initials: 'SJ'
  },
  {
    name: 'Alex Rivera',
    role: 'Senior Engineer',
    status: 'Coding',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    initials: 'AR'
  },
  {
    name: 'Elena Rostova',
    role: 'UI/UX Lead',
    status: 'Design Review',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
    initials: 'ER'
  },
  {
    name: 'Marcus Vance',
    role: 'DevOps Lead',
    status: 'Out of Office',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    initials: 'MV'
  }
]

const Home = () => {
  const { employee } = useSelector((state) => state.auth)
  const [selectedRange, setSelectedRange] = useState('Last 7 Days')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const displayName = employee?.name || 'Devendra'

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      {/* ==============================
          DASHBOARD HEADER
      ============================== */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Good morning, {displayName} 👋
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Here's what's happening with your workspace and team today.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button variant="outline" size="sm">
            Download Report
          </Button>
          <Button size="sm">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Workspace Insights</span>
          </Button>
        </div>
      </div>

      {/* ==============================
          4 METRIC CARDS (SHADCN CARD)
      ============================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Card key={idx} className="transition-all hover:border-zinc-400 dark:hover:border-zinc-700">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {stat.title}
                </CardTitle>
                <div className="w-7 h-7 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">
                  {stat.value}
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <Badge variant="secondary" className="px-1.5 py-0 text-[10px] font-medium">
                    {stat.badge}
                  </Badge>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {stat.description}
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* ==============================
          MIDDLE SECTION: TASK PROGRESS & ACTIVITY
      ============================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Progress Bar Chart */}
        <Card className="lg:col-span-2 flex flex-col justify-between">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Task Progress</CardTitle>
              <CardDescription>Daily task completions and activity volume</CardDescription>
            </div>
            {/* Filter Dropdown */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="gap-1 text-xs"
              >
                <span>{selectedRange}</span>
                <ChevronDown className="w-3 h-3" />
              </Button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg py-1 z-20 animate-in fade-in zoom-in-95">
                  {['Last 7 Days', 'Last 14 Days', 'This Month'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSelectedRange(opt)
                        setIsDropdownOpen(false)
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="pt-4">
            <div className="h-52 flex items-end justify-between gap-3 sm:gap-6 px-2">
              {progressDays.map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
                  <div className="w-full max-w-[48px] h-full flex items-end">
                    <div
                      style={{ height: item.height }}
                      className={`w-full rounded-md transition-all duration-300 relative cursor-pointer ${
                        item.active
                          ? 'bg-zinc-950 dark:bg-zinc-50 shadow-sm'
                          : 'bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700'
                      }`}
                    >
                      {item.active && (
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs">
                          Peak
                        </div>
                      )}
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      item.active
                        ? 'text-zinc-950 dark:text-zinc-50 font-bold'
                        : 'text-zinc-500 dark:text-zinc-400'
                    }`}
                  >
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Timeline */}
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-base">Activity Timeline</CardTitle>
            <CardDescription>Recent updates across active channels</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {activityTimeline.map((act) => {
              const Icon = act.icon
              return (
                <div key={act.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5 text-zinc-800 dark:text-zinc-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-800 dark:text-zinc-200 leading-snug">
                      <span className="font-semibold text-zinc-950 dark:text-zinc-50">
                        {act.user}
                      </span>{' '}
                      <span className="text-zinc-500 dark:text-zinc-400">{act.action}</span>{' '}
                      <span className="font-medium text-zinc-900 dark:text-zinc-100 underline-offset-2">
                        {act.target}
                      </span>
                    </p>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-0.5 block">
                      {act.time}
                    </span>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      {/* ==============================
          BOTTOM SECTION: TEAM & AI SUGGESTION
      ============================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Team Members */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="text-base">Active Team Members</CardTitle>
              <CardDescription>Collaborating right now across projects</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-xs">
              View All
            </Button>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-zinc-950 dark:text-zinc-50 truncate">
                      {member.name}
                    </p>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                      {member.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Suggestions Card */}
        <Card className="flex flex-col justify-between bg-zinc-950 text-zinc-50 dark:bg-zinc-900 border-zinc-800">
          <CardHeader>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-zinc-400" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
                TeamSync AI
              </span>
            </div>
            <CardTitle className="text-base text-zinc-50">Workspace Optimization</CardTitle>
            <CardDescription className="text-zinc-400">
              Based on team activity, 4 pending PRs need review in <strong className="text-zinc-200">"Core API"</strong>.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button
              variant="outline"
              size="sm"
              className="w-full bg-zinc-900 border-zinc-700 text-zinc-50 hover:bg-zinc-800 hover:text-white dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <span>Review Tasks</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
