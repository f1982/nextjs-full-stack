import React from 'react'

import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Dashboard: React.FC = async () => {
  const t = await getTranslations('dashboard')
  return (
    <div>
      <p>{t('dashboard')}</p>
      <Link href="/dashboard/channel/clvv9835d000712pagx5n9qvx/">
        <Button>WZRCX</Button>
      </Link>
    </div>
  )
}

export default Dashboard
