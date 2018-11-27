// * TodoInput.tsx

// ** License

/**
 * Copyright (C) 2018, Bartłomiej Nankiewicz<bartlomiej.nankiewicz@gmail.com>
 *
 * This file is part of Organic.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// ** Imports

import OrgWidgets from './OrgWidgets';
import React from 'react';
import { OrgNodesListItem } from '../containers/OrgNodesList';

// ** Shape

interface TodoInputProps {
  node: OrgNodesListItem,
  taskStates: any,
  rowsNum: number,
  updateNode: () => void,
}

// ** Component

export const TodoInput = ({
  node: { todo },
  taskStates,
  rowsNum,
  updateNode,
}: TodoInputProps) => {
  const choices = taskStates.map((state: string) => [state, state === todo ? 1 : 0]);
  return (
    <OrgWidgets.ThreeStatesSelectDialog
      rowsNum={rowsNum}
      onItemPress={updateNode}
      items={choices}
    />
  );
};
