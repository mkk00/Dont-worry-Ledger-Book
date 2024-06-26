import { DailySummaryProps } from '@/interface/LedgerProps'

export default interface DateItemProps {
  date: number
  isToday: boolean
  isHoliday: boolean
  isSelected: boolean
  handleSelectDate: (date: number) => void
  dailyTotal?: DailySummaryProps
}
