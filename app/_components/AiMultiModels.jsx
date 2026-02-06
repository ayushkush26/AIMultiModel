import AiModelList from '@/shared/AiModelList';
import Image from 'next/image';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useModelSelection } from '../_context/ModelSelectionContext';
import { Button } from '@/components/ui/button';

function AiMultiModels() {
    const { selectedModels } = useModelSelection();

    // Filter models based on selection form Sidebar
    const visibleModels = AiModelList.filter(model => selectedModels.includes(model.model));

    return (
        <div className='flex flex-1 h-[75vh] relative group'>
            {visibleModels.length === 0 ? (
                <div className="flex-1 flex items-center justify-center flex-col gap-4">
                    <p className="text-zinc-500">Select a model from the sidebar to start chatting.</p>
                </div>
            ) : (
                visibleModels.map((model, index) => (
                    <div key={index} className='flex flex-col border-r last:border-r-0 h-full overflow-auto flex-1 transition-all duration-300 ease-in-out min-w-0'>

                        <div className='flex w-full items-center justify-between p-4 shrink-0 '>
                            <div className="flex items-center gap-2 min-w-0">
                                <Image
                                    src={model.icon}
                                    alt={model.model}
                                    width={24}
                                    height={24}
                                    className={`rounded-md ${model.invert ? 'dark:invert' : ''}`}
                                />
                                <Select modal={false}>
                                    <SelectTrigger className="w-[180px] border-none shadow-none bg-transparent focus:ring-0">
                                        <SelectValue placeholder={model.subModel[0].name} />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-xl border-zinc-200 dark:border-zinc-700 z-50">
                                        <SelectGroup>
                                            {model.subModel.map((subModel, index) => (
                                                <SelectItem key={index} value={subModel.name}>{subModel.name}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button variant="outline" size="sm"
                                className={!model.premium || !model.enable ? "invisible" : ""} >
                                Upgrade to Premium
                            </Button>

                        </div>

                        {/* Empty State */}
                        <div className="flex flex-col items-center justify-center p-8 flex-1 text-center opacity-50">
                            <Image
                                src={model.icon}
                                alt={model.model}
                                width={48}
                                height={48}
                                className={`rounded-lg mb-4 opacity-50 ${model.invert ? 'dark:invert' : ''}`}
                            />
                            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                                {model.model} is ready
                            </h3>
                            <p className="text-sm text-zinc-500 max-w-50 mt-2">
                                Start a conversation with {model.model} AI.
                            </p>
                        </div>

                    </div>
                ))
            )}

        </div>
    )
}

export default AiMultiModels