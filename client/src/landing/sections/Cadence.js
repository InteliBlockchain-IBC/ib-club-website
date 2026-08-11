import React from 'react';
import SectionHeader from '../SectionHeader';
import PanelPair from '../PanelPair';
import { useTranslation } from '../i18n';

export default function Cadence() {
  const { t } = useTranslation();
  const s = t.cadence;
  return (
    <section className="section rise">
      <SectionHeader label={s.label} title={s.title} prose={s.prose} />
      <PanelPair panels={s.panels} />
    </section>
  );
}
