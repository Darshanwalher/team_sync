import React, { useMemo } from 'react'
import { Check } from 'lucide-react'

export const PasswordStrengthMeter = ({ password = '' }) => {
  const calculations = useMemo(() => {
    if (!password) return { score: 0, label: '', items: [] }

    const checks = [
      { id: 'length', text: 'At least 8 characters', valid: password.length >= 8 },
      { id: 'number', text: 'Contains a number', valid: /\d/.test(password) },
      { id: 'uppercase', text: 'Uppercase & lowercase letters', valid: /[a-z]/.test(password) && /[A-Z]/.test(password) },
      { id: 'special', text: 'Special character (e.g. !@#$)', valid: /[^A-Za-z0-9]/.test(password) },
    ]

    const validCount = checks.filter(c => c.valid).length
    let label = 'Weak'
    let color = 'bg-rose-500'

    if (validCount === 4) {
      label = 'Strong'
      color = 'bg-emerald-500'
    } else if (validCount >= 2) {
      label = 'Medium'
      color = 'bg-amber-500'
    }

    return {
      score: validCount,
      label,
      color,
      items: checks,
    }
  }, [password])

  if (!password) return null

  return (
    <div className="space-y-2 pt-1.5">
      {/* 4 strength indicators */}
      <div className="flex gap-1.5 h-1">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`flex-1 rounded-full ${
              index < calculations.score ? calculations.color : 'bg-zinc-800'
            }`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between text-[11px] text-zinc-400">
        <span>Password strength:</span>
        <span className="font-medium text-zinc-300">{calculations.label}</span>
      </div>

      <div className="grid grid-cols-2 gap-1.5 pt-0.5">
        {calculations.items.map((item) => (
          <div key={item.id} className="flex items-center gap-1.5 text-[11px]">
            {item.valid ? (
              <Check className="w-3 h-3 text-emerald-400 shrink-0" />
            ) : (
              <div className="w-3 h-3 rounded-full border border-zinc-700 shrink-0" />
            )}
            <span className={item.valid ? "text-zinc-300" : "text-zinc-500"}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PasswordStrengthMeter

