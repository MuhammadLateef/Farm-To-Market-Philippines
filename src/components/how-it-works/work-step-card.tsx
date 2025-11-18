import { LucideIcon } from 'lucide-react'

interface WorkStepCardProps {
  step: {
    id: number
    icon: LucideIcon
    title: string
    description: string
  }
}

export function WorkStepCard({ step }: WorkStepCardProps) {
  const IconComponent = step.icon

  return (
    <div className="flex flex-col items-center -mt-32 px-6">
      {/* Floating Icon */}
      <div className="w-44 h-44 bg-green-600 border-[14px] border-white rounded-full flex items-center justify-center shadow-xl mb-8">
        <IconComponent size={80} className="text-white" />
      </div>

      {/* Title & description */}
      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
      <p className="text-white leading-relaxed text-base font-medium">
        {step.description}
      </p>
    </div>
  )
}
