interface NavigationComponentProps{
    title: string;
    subtitle: string;
    icon: React.ReactElement;
}
function NavigationComponent({ title, subtitle, icon }: NavigationComponentProps) {
  return (
    <button className="flex flex-row gap-4 cursor-pointer">
      <div className="flex flex-row items-center justify-center bg-lightSecondary rounded-full w-12 max-[1146px]:w-9 h-12 max-[1146px]:h-9">
        {icon}
      </div>
      <div className={`flex flex-col text-start ${subtitle !== '123-456-7890' ? "max-tablet:hidden" : ""}`}>
        <p className="text-white capitalize font-semibold max-[1146px]:text-[0.9rem]">{title}</p>
        <p className="text-white capitalize max-[1146px]:text-sm">{subtitle}</p>
      </div>
    </button>
  )
}
export default NavigationComponent