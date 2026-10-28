import React, { useState, useEffect } from 'react';
import { Activity, X, Trash2, CheckCircle2 } from 'lucide-react';
import { AnalyticsEvent } from '../types';
import { getEventLog, subscribeToEvents } from '../utils/constants';

export const AnalyticsDrawer: React.FC = () => {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setEvents(getEventLog());
    const unsubscribe = subscribeToEvents((newEvent) => {
      setEvents((prev) => [newEvent, ...prev].slice(0, 50));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      {/* Discreet Trigger Button in bottom left corner */}
      <div className="fixed bottom-4 left-4 z-40 hidden md:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold bg-white/90 hover:bg-white text-slate-700 border border-slate-300 rounded-lg shadow-sm backdrop-blur-xs transition-colors cursor-pointer"
          title="CRO Analytics & Event Log Monitor"
        >
          <Activity className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
          <span>CRO Events ({events.length})</span>
        </button>
      </div>

      {/* Slide-out Event Drawer */}
      {isOpen && (
        <div className="fixed bottom-14 left-4 z-50 w-84 sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 max-h-[70vh] flex flex-col">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-600" />
              <h4 className="text-xs font-bold text-slate-900">Conversion Event Tracker</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="text-[11px] text-slate-500 py-2">
            Tracks clicks, form starts, submits, and channel conversions in real time:
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {events.length === 0 ? (
              <p className="text-xs text-slate-400 py-6 text-center italic">
                No events recorded yet. Click any Call, WhatsApp, or Form CTA to record conversions.
              </p>
            ) : (
              events.map((evt) => (
                <div
                  key={evt.id}
                  className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80 text-[11px] space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-emerald-800">
                      {evt.eventName}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {evt.timestamp}
                    </span>
                  </div>
                  {evt.details && (
                    <pre className="text-[10px] text-slate-600 bg-white p-1 rounded border border-slate-100 overflow-x-auto">
                      {JSON.stringify(evt.details, null, 2)}
                    </pre>
                  )}
                </div>
              ))
            )}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
            <span>Tracking active for CRO optimization</span>
            <button
              onClick={() => setEvents([])}
              className="text-red-500 hover:underline"
            >
              Clear log
            </button>
          </div>
        </div>
      )}
    </>
  );
};
