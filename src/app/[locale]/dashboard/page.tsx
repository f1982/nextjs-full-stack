import { getTranslations } from 'next-intl/server'
import React from 'react'

const Dashboard: React.FC = async () => {
  const t = await getTranslations('dashboard')
  return <p>{t('dashboard')}</p>
}

export default Dashboard
