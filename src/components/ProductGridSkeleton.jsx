import { Skeleton } from "../components/ui/skeleton";

const ProductGridSkeleton = () => {
    const skeletonItems = Array(6).fill(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr] gap-0">
            {skeletonItems.map((_, index) => (
                <div
                    key={index}
                    className="w-full flex flex-col justify-between border rounded-lg py-8 px-4 space-y-6 hover:bg-bgCards transition-all ease-in-out duration-300 group"
                >
                    <div key={index} className="w-full">
                        <div className="p-0">
                            <Skeleton className="h-[200px] w-full rounded-t-lg" />
                        </div>
                        <div className="flex justify-end gap-4 p-4">
                            <Skeleton className="h-10 w-24" />
                            <Skeleton className="h-10 w-36" />
                        </div>
                        <div className="p-4 space-y-3">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                            <Skeleton className="h-4 w-1/4" />
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default ProductGridSkeleton;