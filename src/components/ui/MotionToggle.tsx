'use client'

import { useMotionContext } from '@/providers/MotionProvider'
import { motion } from 'framer-motion'

export function MotionToggle() {
  const { shouldReduceMotion, toggleUserPreference, userPreference } = useMotionContext()

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-300">アニメーション：</span>
      <button
        onClick={toggleUserPreference}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="アニメーション設定を切り替え"
      >
        <motion.span
          className="inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform"
          animate={{
            x: shouldReduceMotion ? 2 : 26
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <span
          className={`absolute left-2 text-xs font-medium ${
            shouldReduceMotion ? 'text-gray-500' : 'text-transparent'
          }`}
        >
          OFF
        </span>
        <span
          className={`absolute right-2 text-xs font-medium ${
            !shouldReduceMotion ? 'text-blue-600' : 'text-transparent'
          }`}
        >
          ON
        </span>
      </button>
      {userPreference !== null && (
        <span className="text-xs text-gray-400">
          (システム設定を上書き)
        </span>
      )}
    </div>
  )
}