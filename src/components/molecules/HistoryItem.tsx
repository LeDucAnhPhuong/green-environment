// src/components/molecules/HistoryItem.tsx
import { Button } from '@/components/ui/button';
import React from 'react';

interface HistoryItemProps {
    id: number;
    text: string;
    model: string;
    voice: string;
    speed: number;
    timestamp: string;
    audioUrl: string;
    currentlyPlaying: string | null;
    onPlay: (url: string) => void;
    onPause: () => void;
    onDelete: (id: number) => void;
    onDownload: (url: string) => void;
}

const HistoryItem: React.FC<HistoryItemProps> = ({
    id,
    text,
    model,
    voice,
    speed,
    timestamp,
    audioUrl,
    onPlay,
    onDelete,
    onDownload,
    currentlyPlaying
}) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-medium">{text.substring(0, 50)}...</p>
            <p className="text-sm text-gray-600">
                Model: {model}, Voice: {voice}, Speed: {speed}
            </p>
            <p className="text-sm text-gray-600">Generated: {timestamp}</p>
            <div className="mt-2 flex space-x-2">
                <Button
                    className='gap-2'
                    onClick={() => onPlay(audioUrl)}

                />
                <Button onClick={() => onDelete(id)} />
                <Button onClick={() => onDownload(audioUrl)} />
            </div>
        </div>
    );
};

export default HistoryItem;
