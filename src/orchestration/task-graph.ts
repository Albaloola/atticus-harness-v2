import { createTask, updateTask, listTasks } from '../state/tasks.js';
import type { TaskDagNode, TaskStatus } from '../types/state.js';

export function createSubTask(
  parentId: string,
  params: {
    matterName: string;
    type: string;
    title: string;
    runId?: string;
    depth?: number;
    assignedAgent?: string;
    dependencies?: string[];
    data?: Record<string, unknown>;
  },
): TaskDagNode {
  return createTask({
    matterName: params.matterName,
    type: params.type,
    title: params.title,
    parentId,
    runId: params.runId,
    depth: params.depth ?? 0,
    assignedAgent: params.assignedAgent,
    dependencies: params.dependencies,
    data: params.data,
  });
}

export function listRunnableTasks(
  matterName: string,
  status?: TaskStatus,
): TaskDagNode[] {
  return listTasks(matterName, { status: status || 'pending' });
}

export function markTaskComplete(
  matterName: string,
  id: string,
): TaskDagNode | null {
  return updateTask(matterName, id, { status: 'completed' });
}

export function markTaskFailed(
  matterName: string,
  id: string,
  reason: string,
): TaskDagNode | null {
  return updateTask(matterName, id, {
    status: 'failed',
    data: { failureReason: reason },
  });
}

export function markTaskBlocked(
  matterName: string,
  id: string,
  reason: string,
): TaskDagNode | null {
  return updateTask(matterName, id, {
    status: 'blocked',
    data: { blockReason: reason },
  });
}
