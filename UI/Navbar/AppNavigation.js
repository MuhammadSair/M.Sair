'use client';

import useNavigationObserver from '@/hooks/useNavigationObserver';
import NavigationMenu from './NavigationMenu';

export default function AppNavigation() {
  const { viewedSection, isVertical } = useNavigationObserver();

  return (
    <NavigationMenu
      vertical={isVertical}
      viewedSection={viewedSection}
    />
  );
}
