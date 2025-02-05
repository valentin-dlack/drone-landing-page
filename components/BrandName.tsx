const BrandName = ({ size }: { size: string }) => {
    return (
        <div className={`font-bold font-display text-${size}`}>
            <span className="text-blue-600 dark:text-blue-400">Feather</span>
            <span className="text-gray-900 dark:text-gray-300">Tech</span>
        </div>
    )
}

export default BrandName