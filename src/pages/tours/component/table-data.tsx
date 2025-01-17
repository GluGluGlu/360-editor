import React from 'react'
import { Tour } from '@/types/tour'
import { cn } from '@/utils/clsx'
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import { useNavigate } from 'react-router-dom'
import { useDeleteTour } from '@/api/services/tour'
import { successToaster } from '@/components/toaster/success-toaster'
import { errorToaster } from '@/components/toaster/error-toaster'
import PulseLoader from 'react-spinners/PulseLoader'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'

type Props = {
  data: Tour[];
}

const thead = [
  'Tanggal di buat',
  'Nama Tour',
  'Action'
] as const

const sortMapping = {
  'Tanggal di buat': 'tanggal',
  'Nama Tour': 'name',
} as const

export const TableData: React.FC<Props> = ({ data }) => {

  const { mutate: deleteTour, status: statusDeleteTour } = useDeleteTour()

  const navigate = useNavigate()

  const [sortBy, setSortBy] = React.useState<keyof typeof sortMapping>('Nama Tour')

  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc')

  const [copyFn] = useCopyToClipboard()

  const dataMemoize = React.useMemo(() => {

    if (['Tanggal di buat'].includes(sortBy)) {
      return data.sort((a, b) => {
        const dateA = new Date(a.created_at).getTime()
        const dateB = new Date(b.created_at).getTime()
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
      })
    }
    else if (['Nama Tour'].includes(sortBy)) {
      return data?.sort((a, b) =>
        sortOrder === 'asc' ? a.name?.localeCompare(b.name) : b.name?.localeCompare(a.name))
    }
    else {
      return data
    }

  }, [data, sortBy, sortOrder])

  const handleSortHeader = (baseOn: keyof typeof sortMapping) =>
    () => {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')
      setSortBy(baseOn)
    }

  const navigateToTour = (id: string) =>
    () => navigate(`/tour/${id}`)

  const navigateToEditor = (id: string) =>
    () => navigate(`/editor/${id}`)

  const handleCopyToClipBoard = (id: string) =>
    () => {
      const host = window.location.host;

      copyFn(`${host}/tour/${id}`, (status) => {
        if (status === 'success') {
          successToaster({ message: 'Behasil copy to clipboard' })
          return;
        }
        errorToaster({ message: 'Gagal copy to clipboard' })
      })
    }

  const handleDeleteTour = (id: string) =>
    () => {
      const ask = confirm('Yakin ingin menghapus tour ?')

      if (ask) {
        deleteTour(
          {
            tour_id: id
          },
          {
            onSuccess: () => {
              successToaster({ message: 'Berhasil menghapus tour' })
            },
            onError: () => {
              errorToaster({ message: 'Gagal mengapus tour' })
            }
          }
        )
      }

    }

  return (
    <div className='overflow-x-auto' aria-label='table-container'>
      <table className="w-full border-collapse min-w-[1500px]">
        <thead>
          <tr className="bg-blue-700 text-white">
            {thead.map((head, i) => (
              <th
                key={i}
                className="w-1/6 font-medium py-2 lg:py-3 cursor-pointer text-sm md:text-base"
              >
                <div
                  className='w-max mx-auto flex items-center'
                  onClick={handleSortHeader(head as keyof typeof sortMapping)}
                >
                  {head}
                  <div className='flex flex-col opacity-60 hover:opacity-100'>
                    {head !== 'Action' && (
                      <>
                        <MdOutlineArrowDropUp className='translate-y-1' />
                        <MdOutlineArrowDropDown className='-translate-y-1' />
                      </>
                    )}
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataMemoize?.map((item, i) => (
            <tr key={i} className={cn((i + 1) % 2 === 0 ? 'bg-blue-500/10' : '')}>
              <td className="w-1/6 py-[.3rem] md:py-[.5rem] lg:py-2 text-center text-sm md:text-base">{dayjs(item.created_at).locale('id').format('ddd D MMM YYYY')}</td>
              <td className="w-1/6 py-[.3rem] md:py-[.5rem] lg:py-2 text-center text-sm md:text-base">{item.name}</td>
              <td className="w-1/6 py-[.3rem] md:py-[.5rem] lg:py-2 text-center text-sm md:text-base">
                <div className='flex items-center justify-center gap-3'>
                  <TableButton
                    onClick={navigateToTour(item.id)}
                  >
                    Jelajahi
                  </TableButton>
                  <TableButton
                    onClick={navigateToEditor(item.id)}
                  >
                    Edit
                  </TableButton>
                  <TableButton
                    onClick={handleCopyToClipBoard(item.id)}
                  >
                    Share
                  </TableButton>
                  <TableButton
                    disabled={statusDeleteTour === 'loading'}
                    onClick={handleDeleteTour(item.id)}
                  >
                    {
                      statusDeleteTour === 'loading'
                        ? <PulseLoader color='skyblue' size={10} />
                        : 'Hapus'
                    }
                  </TableButton>
                </div>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>

  )
}

type TableButtonProps = React.ComponentProps<'button'>

const TableButton = ({ children, ...rest }: TableButtonProps) => {

  return (
    <button
      {...rest}
      className={cn(
        "transition px-5 md:px-7 py-[.30rem] md:py-[.35rem] rounded-md",
        'text-base bg-white text-blue-600',
        'border md:border-2 border-blue-600',
        'text-sm md:text-base',
        'hover:bg-blue-600 hover:text-white'
      )}
      type="button"
    >
      {children}
    </button>
  )
}