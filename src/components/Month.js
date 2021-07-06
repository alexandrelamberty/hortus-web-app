export function Month({id, name, selected})
{
    return (
        <div
            style={{'background-color' : selected ? 'rgba(255, 255, 255, var(--tw-bg-opacity))' : 'none'}}
            className="border-2 border-green-700 rounded-full w-6 w-6 flex items-center justify-center">{id}
        </div>
    );
}